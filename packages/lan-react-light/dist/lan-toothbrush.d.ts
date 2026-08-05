import React from 'react';

export interface LanToothbrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToothbrush(props: LanToothbrushProps): React.ReactElement;
export default LanToothbrush;
