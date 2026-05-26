import React from 'react';

export interface LanObjectGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectGroup: React.FC<LanObjectGroupProps>;
export default LanObjectGroup;
