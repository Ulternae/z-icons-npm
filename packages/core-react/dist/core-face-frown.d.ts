import React from 'react';

export interface CoreFaceFrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFaceFrown(props: CoreFaceFrownProps): React.ReactElement;
export default CoreFaceFrown;
