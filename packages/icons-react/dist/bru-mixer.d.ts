import React from 'react';

export interface BruMixerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMixer: React.FC<BruMixerProps>;
export default BruMixer;
