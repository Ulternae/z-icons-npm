import React from 'react';

export interface BruGlideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGlide(props: BruGlideProps): React.ReactElement;
export default BruGlide;
