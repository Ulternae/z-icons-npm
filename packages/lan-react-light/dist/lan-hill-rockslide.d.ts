import React from 'react';

export interface LanHillRockslideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHillRockslide(props: LanHillRockslideProps): React.ReactElement;
export default LanHillRockslide;
