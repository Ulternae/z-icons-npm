import React from 'react';

export interface MinaReceptionBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaReceptionBellSolid(props: MinaReceptionBellSolidProps): React.ReactElement;
export default MinaReceptionBellSolid;
