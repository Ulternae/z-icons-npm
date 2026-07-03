import React from 'react';

export interface BruMixerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMixer(props: BruMixerProps): React.ReactElement;
export default BruMixer;
