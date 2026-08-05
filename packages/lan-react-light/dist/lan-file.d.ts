import React from 'react';

export interface LanFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFile(props: LanFileProps): React.ReactElement;
export default LanFile;
