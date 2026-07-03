import React from 'react';

export interface BruAutoprefixerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAutoprefixer(props: BruAutoprefixerProps): React.ReactElement;
export default BruAutoprefixer;
