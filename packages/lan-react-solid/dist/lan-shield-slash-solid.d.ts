import React from 'react';

export interface LanShieldSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldSlashSolid(props: LanShieldSlashSolidProps): React.ReactElement;
export default LanShieldSlashSolid;
