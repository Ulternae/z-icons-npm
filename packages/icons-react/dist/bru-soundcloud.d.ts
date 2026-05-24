import React from 'react';

export interface BruSoundcloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSoundcloud: React.FC<BruSoundcloudProps>;
export default BruSoundcloud;
