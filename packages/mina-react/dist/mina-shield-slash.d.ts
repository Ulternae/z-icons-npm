import React from 'react';

export interface MinaShieldSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldSlash(props: MinaShieldSlashProps): React.ReactElement;
export default MinaShieldSlash;
