import React from 'react';

export interface LanHeadphonesSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadphonesSlash(props: LanHeadphonesSlashProps): React.ReactElement;
export default LanHeadphonesSlash;
