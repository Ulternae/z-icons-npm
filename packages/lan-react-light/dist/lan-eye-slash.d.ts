import React from 'react';

export interface LanEyeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeSlash(props: LanEyeSlashProps): React.ReactElement;
export default LanEyeSlash;
