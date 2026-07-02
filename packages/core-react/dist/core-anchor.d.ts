import React from 'react';

export interface CoreAnchorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAnchor(props: CoreAnchorProps): React.ReactElement;
export default CoreAnchor;
