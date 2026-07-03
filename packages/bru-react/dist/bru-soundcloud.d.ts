import React from 'react';

export interface BruSoundcloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSoundcloud(props: BruSoundcloudProps): React.ReactElement;
export default BruSoundcloud;
