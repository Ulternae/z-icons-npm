import React from 'react';

export interface LanFileJpgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileJpg(props: LanFileJpgProps): React.ReactElement;
export default LanFileJpg;
