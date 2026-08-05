import React from 'react';

export interface LanMartiniGlassEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMartiniGlassEmpty(props: LanMartiniGlassEmptyProps): React.ReactElement;
export default LanMartiniGlassEmpty;
