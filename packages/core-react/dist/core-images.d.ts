import React from 'react';

export interface CoreImagesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreImages(props: CoreImagesProps): React.ReactElement;
export default CoreImages;
