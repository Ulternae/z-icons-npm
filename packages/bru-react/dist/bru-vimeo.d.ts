import React from 'react';

export interface BruVimeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVimeo(props: BruVimeoProps): React.ReactElement;
export default BruVimeo;
