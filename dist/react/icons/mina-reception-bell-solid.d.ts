import React from 'react';

export interface MinaReceptionBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaReceptionBellSolid: React.FC<MinaReceptionBellSolidProps>;
export default MinaReceptionBellSolid;
