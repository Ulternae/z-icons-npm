import React from 'react';

export interface LanWandMagicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandMagic(props: LanWandMagicProps): React.ReactElement;
export default LanWandMagic;
