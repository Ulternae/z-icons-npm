import React from 'react';

export interface NeoFaceFrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFaceFrown(props: NeoFaceFrownProps): React.ReactElement;
export default NeoFaceFrown;
