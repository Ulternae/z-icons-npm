import React from 'react';

export interface MinaPresentationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPresentation(props: MinaPresentationProps): React.ReactElement;
export default MinaPresentation;
