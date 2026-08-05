import React from 'react';

export interface LanRulerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRuler(props: LanRulerProps): React.ReactElement;
export default LanRuler;
