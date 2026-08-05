import React from 'react';

export interface LanUfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUfo(props: LanUfoProps): React.ReactElement;
export default LanUfo;
