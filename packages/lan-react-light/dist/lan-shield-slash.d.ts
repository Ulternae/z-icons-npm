import React from 'react';

export interface LanShieldSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldSlash(props: LanShieldSlashProps): React.ReactElement;
export default LanShieldSlash;
