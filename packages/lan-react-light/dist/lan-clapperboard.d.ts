import React from 'react';

export interface LanClapperboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClapperboard(props: LanClapperboardProps): React.ReactElement;
export default LanClapperboard;
