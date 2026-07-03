import React from 'react';

export interface BruBufferProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBuffer(props: BruBufferProps): React.ReactElement;
export default BruBuffer;
