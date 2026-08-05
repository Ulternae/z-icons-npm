import React from 'react';

export interface LanTextSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSlash(props: LanTextSlashProps): React.ReactElement;
export default LanTextSlash;
