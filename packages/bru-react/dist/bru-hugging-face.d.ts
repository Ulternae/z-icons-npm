import React from 'react';

export interface BruHuggingFaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHuggingFace(props: BruHuggingFaceProps): React.ReactElement;
export default BruHuggingFace;
