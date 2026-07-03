import React from 'react';

export interface BruTheRedYetiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTheRedYeti(props: BruTheRedYetiProps): React.ReactElement;
export default BruTheRedYeti;
