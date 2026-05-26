import React from 'react';

export interface LanMartiniGlassEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMartiniGlassEmpty: React.FC<LanMartiniGlassEmptyProps>;
export default LanMartiniGlassEmpty;
