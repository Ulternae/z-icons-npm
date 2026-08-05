import React from 'react';

export interface MinaShieldSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldSlashSolid(props: MinaShieldSlashSolidProps): React.ReactElement;
export default MinaShieldSlashSolid;
