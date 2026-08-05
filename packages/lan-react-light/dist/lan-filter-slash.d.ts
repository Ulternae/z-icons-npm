import React from 'react';

export interface LanFilterSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilterSlash(props: LanFilterSlashProps): React.ReactElement;
export default LanFilterSlash;
