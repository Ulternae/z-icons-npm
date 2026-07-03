import React from 'react';

export interface BruSpeakapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSpeakap(props: BruSpeakapProps): React.ReactElement;
export default BruSpeakap;
