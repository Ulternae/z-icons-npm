import React from 'react';

export interface LanFileZipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileZip(props: LanFileZipProps): React.ReactElement;
export default LanFileZip;
