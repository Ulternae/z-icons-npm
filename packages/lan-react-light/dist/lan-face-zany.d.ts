import React from 'react';

export interface LanFaceZanyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceZany(props: LanFaceZanyProps): React.ReactElement;
export default LanFaceZany;
