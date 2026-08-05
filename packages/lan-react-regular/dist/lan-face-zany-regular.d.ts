import React from 'react';

export interface LanFaceZanyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceZanyRegular(props: LanFaceZanyRegularProps): React.ReactElement;
export default LanFaceZanyRegular;
