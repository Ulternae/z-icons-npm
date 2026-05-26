import React from 'react';

export interface LanChimneySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChimneySolid: React.FC<LanChimneySolidProps>;
export default LanChimneySolid;
