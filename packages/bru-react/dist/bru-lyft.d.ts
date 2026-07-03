import React from 'react';

export interface BruLyftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLyft(props: BruLyftProps): React.ReactElement;
export default BruLyft;
