import React from 'react';

export interface CoreCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCrown(props: CoreCrownProps): React.ReactElement;
export default CoreCrown;
