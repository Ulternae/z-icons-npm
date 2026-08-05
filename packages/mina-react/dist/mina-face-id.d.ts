import React from 'react';

export interface MinaFaceIdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFaceId(props: MinaFaceIdProps): React.ReactElement;
export default MinaFaceId;
