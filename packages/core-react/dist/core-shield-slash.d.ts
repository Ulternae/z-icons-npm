import React from 'react';

export interface CoreShieldSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShieldSlash(props: CoreShieldSlashProps): React.ReactElement;
export default CoreShieldSlash;
