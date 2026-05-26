import React from 'react';

export interface LanMonkeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonkeySolid: React.FC<LanMonkeySolidProps>;
export default LanMonkeySolid;
