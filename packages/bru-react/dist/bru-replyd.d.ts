import React from 'react';

export interface BruReplydProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruReplyd(props: BruReplydProps): React.ReactElement;
export default BruReplyd;
