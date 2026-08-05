import React from 'react';

export interface MinaCrosshairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCrosshairSolid(props: MinaCrosshairSolidProps): React.ReactElement;
export default MinaCrosshairSolid;
