import React from 'react';

export interface CoreWandMagicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWandMagic(props: CoreWandMagicProps): React.ReactElement;
export default CoreWandMagic;
