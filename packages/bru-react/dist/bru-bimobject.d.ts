import React from 'react';

export interface BruBimobjectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBimobject(props: BruBimobjectProps): React.ReactElement;
export default BruBimobject;
