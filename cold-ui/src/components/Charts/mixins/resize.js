import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
let default_1 = class extends Vue {
    mounted() {
        this.initResizeEvent();
        this.initSidebarResizeEvent();
    }
    beforeDestroy() {
        this.destroyResizeEvent();
        this.destroySidebarResizeEvent();
    }
    activated() {
        this.initResizeEvent();
        this.initSidebarResizeEvent();
    }
    deactivated() {
        this.destroyResizeEvent();
        this.destroySidebarResizeEvent();
    }
    chartResizeHandler() {
        if (this.chart) {
            this.chart.resize();
        }
    }
    sidebarResizeHandler(e) {
        if (e.propertyName === 'width') {
            this.chartResizeHandler();
        }
    }
    initResizeEvent() {
        if (this.chartResizeHandler) {
            window.addEventListener('resize', this.chartResizeHandler);
        }
    }
    destroyResizeEvent() {
        if (this.chartResizeHandler) {
            window.removeEventListener('resize', this.chartResizeHandler);
        }
    }
    initSidebarResizeEvent() {
        this.sidebarElm = document.getElementsByClassName('sidebar-container')[0];
        if (this.sidebarElm) {
            this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler);
        }
    }
    destroySidebarResizeEvent() {
        if (this.sidebarElm) {
            this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler);
        }
    }
};
default_1 = tslib_1.__decorate([
    Component({
        name: 'ResizeMixin'
    })
], default_1);
export default default_1;
//# sourceMappingURL=resize.js.map