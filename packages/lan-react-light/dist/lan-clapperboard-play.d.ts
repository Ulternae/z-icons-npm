import React from 'react';

export interface LanClapperboardPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClapperboardPlay(props: LanClapperboardPlayProps): React.ReactElement;
export default LanClapperboardPlay;
