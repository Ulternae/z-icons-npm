import React from 'react';

export interface BruPythonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPython(props: BruPythonProps): React.ReactElement;
export default BruPython;
