import React from 'react';

export interface LanBacteriaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacteria(props: LanBacteriaProps): React.ReactElement;
export default LanBacteria;
