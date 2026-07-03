import React from 'react';

export interface BruReactProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruReact(props: BruReactProps): React.ReactElement;
export default BruReact;
